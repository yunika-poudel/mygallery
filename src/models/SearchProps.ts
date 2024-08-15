export type SearchProps = {
  searchText: string;
  setSearchText: (text: string) => void;
  selectedValue: string;
  setSelectedValue: (text: string) => void;
  search: boolean;
  setSearch: (isTrue: boolean) => void;
};
