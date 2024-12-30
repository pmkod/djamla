import { FileUpload as FileUploadPrimitives } from "@ark-ui/solid";
import { IconTrash } from "@tabler/icons-solidjs";
import {For, JSX, splitProps} from "solid-js"

const DropzoneTrigger = FileUploadPrimitives.Trigger;


const Dropzone = (props: FileUploadPrimitives.RootProps) => {
    const [local, rest] = splitProps(props, ["children"])
    
  return (
    <FileUploadPrimitives.Root
      class="relative aspect-video w-full"
      {...rest}
    >
      <FileUploadPrimitives.Dropzone class="border-base-300 mb-4 flex h-full w-full flex-col items-center justify-center gap-y-4 rounded-sm border pb-5">
        {local.children}
      </FileUploadPrimitives.Dropzone>
      <FileUploadPrimitives.HiddenInput class="" />

      <FileUploadPrimitives.ItemGroup class="relative space-y-2">
        <FileUploadPrimitives.Context>
          {(context) =>

<For each={context().acceptedFiles}>
{(file) => (

<FileUploadPrimitives.Item
file={file}
class="border-base-300 flex items-center gap-x-4 rounded-sm border p-4"
>
{file.type.startsWith("image") ? (
  <FileUploadPrimitives.ItemPreview type="image/*" class="">
    <FileUploadPrimitives.ItemPreviewImage
      src={URL.createObjectURL(file)}
      class="h-12 w-12 object-contain object-center"
    />
  </FileUploadPrimitives.ItemPreview>
) : (
  <FileUploadPrimitives.ItemPreview
    type=".*"
    class="border-base-300 bg-base-200 text-base-500 flex h-12 w-12 items-center justify-center rounded border text-sm font-semibold uppercase"
  >
    {file.name.split(".").pop()}
  </FileUploadPrimitives.ItemPreview>
)}

<div class="flex flex-1 flex-col">
  <FileUploadPrimitives.ItemName class="text-base-800 text-sm font-medium" />
  <FileUploadPrimitives.ItemSizeText class="text-base-500 text-sm" />
</div>
<FileUploadPrimitives.ItemDeleteTrigger class="border-base-300 hover:bg-base-200 rounded border p-1.5 transition-colors">
  <IconTrash class="text-base-600 h-4 w-4" />
</FileUploadPrimitives.ItemDeleteTrigger>
</FileUploadPrimitives.Item>
)}
</For>

          }
        </FileUploadPrimitives.Context>
      </FileUploadPrimitives.ItemGroup>
    </FileUploadPrimitives.Root>
  );
};


const DropzoneText = (props : JSX.HTMLAttributes<HTMLDivElement>
) => {
    const [local, rest] = splitProps(props, ["children"])

  return (
    <div class="text-base-600 text-lg" {...rest}>
      {local.children}
    </div>
  );
}



export { Dropzone, DropzoneText, DropzoneTrigger };
