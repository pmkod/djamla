"use client";
import React, { forwardRef } from "react";
import { FileUpload as FileUploadPrimitives } from "@ark-ui/react";
import { IconTrash } from "@tabler/icons-react";

const Dropzone = forwardRef<
  React.ElementRef<typeof FileUploadPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof FileUploadPrimitives.Root>
>(({ children, ...props }, ref) => {
  return (
    <FileUploadPrimitives.Root
      ref={ref}
      className="relative aspect-video w-full"
      {...props}
    >
      <FileUploadPrimitives.Dropzone className="mb-4 flex h-full w-full flex-col items-center justify-center gap-y-4 rounded-sm border border-gray-300 pb-5">
        {children}
      </FileUploadPrimitives.Dropzone>
      <FileUploadPrimitives.HiddenInput className="" />

      <FileUploadPrimitives.ItemGroup className="relative space-y-2">
        <FileUploadPrimitives.Context>
          {({ acceptedFiles }) =>
            acceptedFiles.map((file) => (
              <FileUploadPrimitives.Item
                key={file.name}
                file={file}
                className="flex items-center gap-x-4 rounded-sm border border-gray-300 p-4"
              >
                {file.type.startsWith("image") ? (
                  <FileUploadPrimitives.ItemPreview type="image/*" className="">
                    <FileUploadPrimitives.ItemPreviewImage className="h-12 w-12 object-contain object-center" />
                  </FileUploadPrimitives.ItemPreview>
                ) : (
                  <FileUploadPrimitives.ItemPreview
                    type=".*"
                    className="flex h-12 w-12 items-center justify-center rounded border border-gray-300 bg-gray-200 text-sm font-semibold uppercase text-gray-500"
                  >
                    {file.name.split(".").pop()}
                  </FileUploadPrimitives.ItemPreview>
                )}

                <div className="flex flex-1 flex-col">
                  <FileUploadPrimitives.ItemName className="text-sm font-medium text-gray-800" />
                  <FileUploadPrimitives.ItemSizeText className="text-sm text-gray-500" />
                </div>
                <FileUploadPrimitives.ItemDeleteTrigger className="rounded border border-gray-300 p-1.5 transition-colors hover:bg-gray-200">
                  <IconTrash className="h-4 w-4 text-gray-600" />
                </FileUploadPrimitives.ItemDeleteTrigger>
              </FileUploadPrimitives.Item>
            ))
          }
        </FileUploadPrimitives.Context>
      </FileUploadPrimitives.ItemGroup>
    </FileUploadPrimitives.Root>
  );
});

Dropzone.displayName = "Dropzone";

const DropzoneText = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, ...props }, ref) => {
  return (
    <div ref={ref} className="text-sm text-gray-600" {...props}>
      {children}
    </div>
  );
});

DropzoneText.displayName = "DropzoneText";

const DropzoneTrigger = FileUploadPrimitives.Trigger;

export { Dropzone, DropzoneTrigger, DropzoneText };
