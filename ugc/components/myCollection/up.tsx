"use client";

import { useEffect, useState } from "react";
import Uppy from "@uppy/core";
import Tus from "@uppy/tus";
import Dashboard from "@uppy/dashboard";
import "@/utils/supabase/storage/client"
import "@uppy/core/dist/style.min.css";
import "@uppy/dashboard/dist/style.min.css";

function Up() {
    const uppy = useUppyWithSupabase({ bucketName: "builtit-ugc" });

    useEffect(() => {
        // Set up Uppy Dashboard to display as an inline component within a specified target
        uppy.use(Dashboard, {
            inline: true, // Ensures the dashboard is rendered inline
            target: "#drag-drop-area", // HTML element where the dashboard renders
            showProgressDetails: true, // Show progress details for file uploads
        });
    }, []);

    return (
        <div id="drag-drop-area">
        </div>
    );
}

export default Up;

/**
 * Custom hook for configuring Uppy with Supabase authentication and TUS resumable uploads
 * @param {Object} options - Configuration options for the Uppy instance.
 * @param {string} options.bucketName - The bucket name in Supabase where files are stored.
 * @returns {Object} uppy - Uppy instance with configured upload settings.
 */
export const useUppyWithSupabase = ({ bucketName }: { bucketName: string }) => {
    // Initialize Uppy instance only once
    const [uppy] = useState(() => new Uppy());

    useEffect(() => {
        const initializeUppy = async () => {
        
        uppy.use(Tus, {
                endpoint: `${process.env.NEXT_PUBLIC_SUPABASE_URL!}/storage/v1/upload/resumable`, // Supabase TUS endpoint
                retryDelays: [0, 3000, 5000, 10000, 20000], // Retry delays for resumable uploads
                headers: {
                    authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!}`,// User session access token
                    apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, // API key for Supabase
                },
                uploadDataDuringCreation: true, // Send metadata with file chunks
                removeFingerprintOnSuccess: true, // Remove fingerprint after successful upload
                chunkSize: 10 * 1024 * 1024, // Chunk size for TUS uploads (10MB)
                allowedMetaFields: [
                    "bucketName",
                    "objectName",
                    "contentType",
                    "cacheControl",
                ], // Metadata fields allowed for the upload
                onError: (error) => console.error("Upload error:", error), // Error handling for uploads
            }).on("file-added", (file) => {
                // Attach metadata to each file, including bucket name and content type
                file.meta = {
                    ...file.meta,
                    bucketName, // Bucket specified by the user of the hook
                    objectName: file.name, // Use file name as object name
                    contentType: file.type, // Set content type based on file MIME type
                };
            });
        };

        // Initialize Uppy with Supabase settings
        initializeUppy();
    }, [uppy, bucketName]);

    // Return the configured Uppy instance
    return uppy;
};
