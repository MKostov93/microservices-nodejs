export interface IListing {
  id: string;
  title: string;
  description: string;
}

export interface IListingProps {
  listing: IListing;
  onDelete: () => void;
}
