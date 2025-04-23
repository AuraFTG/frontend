import { MdOutlineSearch } from "react-icons/md";

interface PatientsFilterProps {
  placeholder: string;
}

function PatientsFilter({ placeholder }: PatientsFilterProps) {
  return (
    <article className="flex items-center border border-neutral-300 rounded-xl overflow-hidden">
      <input
        className="pl-2 py-1 focus:outline-none"
        type="text"
        name="patients-filter"
        id="patients-filter"
        placeholder={placeholder}
      />
      <button className="py-1 px-2 text-white bg-blue-400 hover:bg-blue-600 transition-colors duration-300 w-full h-full cursor-pointer">
        <MdOutlineSearch size={26} />
      </button>
    </article>
  );
}

export default PatientsFilter;
