import { FieldMeta } from '@tanstack/react-form';

const FieldInfo = ({ fieldMeta }: { fieldMeta: FieldMeta | undefined }) => {
  if (!fieldMeta) return null;
  return (
    <>
      {fieldMeta.isTouched && fieldMeta.errors.length > 0 && (
        <em className="text-red-600 font-medium">
          {fieldMeta.errors.join(', ')}
        </em>
      )}
    </>
  );
};

export default FieldInfo;
