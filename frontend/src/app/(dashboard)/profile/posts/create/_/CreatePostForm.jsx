"use client";

import { useCategories } from "@/hooks/useCategories";
import Button from "@/ui/Button";
import ButtonIcon from "@/ui/ButtonIcon";
import FileInput from "@/ui/FileInput";
import RHFSelect from "@/ui/RHFSelect";
import RHFTextField from "@/ui/RHFTextField";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import useCreatePost from "./useCreatePost";
import SpinnerMini from "@/ui/SpinnerMini";
import { useRouter } from "next/navigation";

const schema = yup
  .object({
    title: yup.string().min(5, "حداقل ۵ کاراکتر را وارد کنید").required("عنوان ضروری است"),
    briefText: yup.string().min(5, "حداقل ۱۰ کاراکتر را وارد کنید").required("توضیحات ضروری است"),
    text: yup.string().min(5, "حداقل ۱۰ کاراکتر را وارد کنید").required("توضیحات ضروری است"),
    slug: yup.string().required("اسلاگ ضروری است"),
    readingTime: yup
      .number()
      .positive()
      .integer()
      .required("زمان مطالعه ضروری است")
      .typeError("یک عدد را وارد کنید"),
    category: yup.string().required("دسته بندی ضروری است"),
  })
  .required();

function CreatePostForm() {
  const { isLoading, categories } = useCategories();
  const [coverImageUrl, setCoverImageUrl] = useState(null);

  const { createPost, isCreating } = useCreatePost();
  const router = useRouter();

  useEffect(() => {
    return () => {
      if (coverImageUrl) URL.revokeObjectURL(coverImageUrl);
    };
  }, [coverImageUrl]);

  const {
    control,
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setValue,
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (value === undefined || value === null) return;
      if (value instanceof File) {
        formData.append(key, value, value.name);
        return;
      }

      formData.append(key, value);
    });

    createPost(formData, {
      onSuccess: () => {
        router.push("/profile/posts");
      },
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <RHFTextField label="عنوان" name="title" errors={errors} register={register} isRequired />
      <RHFTextField
        label="متن کوتاه"
        name="briefText"
        errors={errors}
        register={register}
        isRequired
      />
      <RHFTextField label="متن" name="text" errors={errors} register={register} isRequired />
      <RHFTextField label="اسلاگ" name="slug" errors={errors} register={register} isRequired />
      <RHFTextField
        label="زمان مطالعه"
        name="readingTime"
        errors={errors}
        register={register}
        isRequired
      />
      <RHFSelect
        label="دسته بندی"
        name="category"
        errors={errors}
        register={register}
        isRequired
        options={categories}
      />
      <Controller
        name="coverImage"
        control={control}
        rules={{ required: "کاور پست الزامی است" }}
        defaultValue={null}
        render={({ field: { onChange, value } }) => {
          return (
            <FileInput
              label="انتخاب کاور پست"
              name="coverImage"
              value={value?.fileName}
              errors={errors}
              onChange={(event) => {
                const file = event.target.files?.[0];
                if (!file) return;
                onChange(file);
                if (coverImageUrl) URL.revokeObjectURL(coverImageUrl);
                setCoverImageUrl(URL.createObjectURL(file));
                event.target.value = null;
              }}
            />
          );
        }}
      />

      {coverImageUrl && (
        <div className="relative mt-4 aspect-video w-full overflow-hidden rounded-lg">
          <Image
            fill
            src={coverImageUrl}
            alt="cover-image"
            unoptimized
            sizes="(min-width: 768px) 600px, 90vw"
            className="object-cover object-center"
          />
          <ButtonIcon
            variant="red"
            className="w-6 h-6 absolute left-1 top-1"
            onClick={() => {
              setCoverImageUrl(null);
              setValue("coverImage", null);
            }}
          >
            <XMarkIcon />
          </ButtonIcon>
        </div>
      )}

      {isCreating ? (
        <SpinnerMini />
      ) : (
        <Button variant="primary" type="submit" className="w-full">
          تایید
        </Button>
      )}
    </form>
  );
}

export default CreatePostForm;
