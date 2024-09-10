import { useRef, useState } from 'react';
import { Button } from '../../../components/ui/button';
import { Input } from '../../../components/ui/input';
import { Select } from '../../../components/ui/select';
import { Textarea } from '../../../components/ui/textarea';
import { LayoutDashboard } from '../../dashboard/components/layout';
import { useTag } from '../hooks/useTag';

const CATEGORIES = [
  { value: '1', label: 'Category 1' },
  { value: '2', label: 'Category 2' },
  { value: '3', label: 'Category 3' },
];

export const FormCreateproduct = () => {
  const filesRef = useRef<HTMLInputElement>(null);
  const downloadbleFileRef = useRef<HTMLInputElement>(null);
  const { tag, tags, handleChangeTag, handleAddTag, handleDeleteTag } = useTag();
  const [imagesPreview, setImagesPreview] = useState<string[]>([]);
  const [downloadbleFile, setDownloadbleFile] = useState<string>('');

  function handleAddImages(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setImagesPreview(files.map((file) => URL.createObjectURL(file)));
    }
  }

  function handleAddDownloadbleFile(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      setDownloadbleFile(e.target.files[0].name);
    }
  }

  return (
    <LayoutDashboard isCentered>
      <main>
        <section className="space-y-4">
          <h3>Create product</h3>
          <section className="space-y-2">
            <Input placeholder="Product name" />
            <Textarea placeholder="Product description" rows={6} />
            <Select caption="Category" options={CATEGORIES} />
            <Input placeholder="Price" />
            <Input name="tag" placeholder="Tags" value={tag} onChange={handleChangeTag} onKeyUp={handleAddTag} />
            <ProductTagsRenderer tags={tags} handleDeleteTag={handleDeleteTag} />
            <input
              name="images"
              ref={filesRef}
              type="file"
              accept=".jpg,.jpeg,.png"
              multiple
              hidden
              onChange={handleAddImages}
            />
            <Button variant="outline" onClick={() => filesRef.current?.click()}>
              Add Images
            </Button>
            <div className="flex flex-wrap gap-2">
              {imagesPreview.map((image) => {
                return <img src={image} key={image} className="w-32 rounded-lg object-cover" />;
              })}
            </div>

            <input
              name="downloadbleFile"
              ref={downloadbleFileRef}
              type="file"
              accept=".zip"
              hidden
              onChange={handleAddDownloadbleFile}
            />
            <Button variant="outline" onClick={() => downloadbleFileRef.current?.click()}>
              Add Downloadable Files
            </Button>
            {downloadbleFile && (
              <div className="flex w-fit items-center gap-2 rounded-full border px-2.5 py-1 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="1.5"
                    d="M7.918 17.807l7.89-7.553a2.253 2.253 0 000-3.284 2.503 2.503 0 00-3.43 0l-7.834 7.498a4.28 4.28 0 000 6.24c1.8 1.723 4.718 1.723 6.518 0l7.949-7.608c2.652-2.54 2.652-6.656 0-9.196-2.653-2.539-6.954-2.539-9.607 0L3 10.034"
                  ></path>
                </svg>
                <div>{downloadbleFile}</div>
              </div>
            )}
            <Button>Submit Product</Button>
          </section>
        </section>
      </main>
    </LayoutDashboard>
  );
};

const ProductTagsRenderer = ({
  tags,
  handleDeleteTag,
}: {
  tags: string[];
  handleDeleteTag: (index: number) => void;
}) => {
  return (
    <div role="product-tags" className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <div
          onClick={() => handleDeleteTag(index)}
          key={index}
          className="cursor-pointer rounded-full bg-slate-200 px-2 py-1 text-sm text-slate-700 hover:bg-rose-500"
        >
          {tag}
        </div>
      ))}
    </div>
  );
};
