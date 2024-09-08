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
  const { tag, tags, handleChangeTag, handleAddTag, handleDeleteTag } = useTag();

  return (
    <LayoutDashboard isCentered>
      <main>
        <section className="space-y-4">
          <h3>Create product</h3>
          <section className="space-y-2">
            <Input placeholder="Product name" />
            <Textarea placeholder="Product description" rows={6} />
            <Select caption="Category" options={CATEGORIES} />
            <Button variant="outline">Add Images</Button>
            <Button variant="outline">Add Downloadable Files</Button>
            <Input name="tag" placeholder="Tags" value={tag} onChange={handleChangeTag} onKeyUp={handleAddTag} />
            <ProductTagsRenderer tags={tags} handleDeleteTag={handleDeleteTag} />
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
