type Attribute = {
  size: string;
  color: string;
};

// type for option
export type Option = {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  attributes: Attribute[];
};
