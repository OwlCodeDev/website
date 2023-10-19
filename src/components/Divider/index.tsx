import ChevronDownIcon from "@heroicons/react/20/solid/ChevronDownIcon";

interface IDividerComponent {
  href?: string;
}

function DividerComponent(props: IDividerComponent) {
  return (
    <div className="divider bg-primary mt-0">
      <a
        className="btn btn-circle z-10 bg-primary border-none"
        href={props.href}
      >
        <ChevronDownIcon />
      </a>
    </div>
  );
}

export default DividerComponent;
