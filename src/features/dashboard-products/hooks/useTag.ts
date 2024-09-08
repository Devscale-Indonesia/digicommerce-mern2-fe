import { useState } from 'react';

export const useTag = () => {
  const [tag, setTag] = useState('');
  const [tags, setTags] = useState<string[]>([]);

  function handleChangeTag(evt: React.ChangeEvent<HTMLInputElement>) {
    setTag(evt.target.value);
  }

  function handleAddTag(evt: React.KeyboardEvent<HTMLInputElement>) {
    console.log(evt.code);
    if (evt.code === 'Enter') {
      setTags([...tags, tag]);
      setTag('');
    }
  }

  function handleDeleteTag(index: number) {
    const newTags = tags.filter((_, i) => i !== index);
    setTags(newTags);
  }

  return { tag, tags, handleChangeTag, handleAddTag, handleDeleteTag };
};
