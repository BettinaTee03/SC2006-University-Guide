import MultiSelect from "multiselect-react-dropdown";

function MultiSelection(props) {
  const options = [
    { name: "Accountancy", id: 1 },
    { name: "Architecture, Building & Real Estate", id: 2 },
    { name: "Business & Administration", id: 3 },
    { name: "Dentistry", id: 4 },
    { name: "Education", id: 5 },
    { name: "Engineering Sciences", id: 6 },
    { name: "Fine & Applied Arts", id: 7 },
    { name: "Health Sciences", id: 8 },
    { name: "Humanities & Social Sciences", id: 9 },
    { name: "Information Technology", id: 10 },
    { name: "Law", id: 11 },
    { name: "Mass Communication", id: 12 },
    { name: "Medicine", id: 13 },
    { name: "Natural, Physical & Mathematical Sciences", id: 14 },
    { name: "Services", id: 15 },
  ];

  const onSelect = (selectedList, selectedItem) => {
    if (props.onChange) {
      props.onChange(selectedList);
    }
  };

  const onRemove = (selectedList, removedItem) => {
    if (props.onChange) {
      props.onChange(selectedList);
    }
  };

  return (
    <>
      <MultiSelect
        options={options}
        selectedValues={props.value}
        onSelect={onSelect}
        onRemove={onRemove}
        displayValue="name"
      />
    </>
  );
}

export default MultiSelection;
