import { FieldApi } from '@tanstack/react-form';

export const useFileHandler = () => {
  const handleFileChange = (
    field: FieldApi<any, 'img', undefined, undefined>,
    file: File
  ) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      field.handleChange(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  return { handleFileChange };
};
