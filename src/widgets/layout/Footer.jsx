import PropTypes from "prop-types";
import { Typography, IconButton } from "@material-tailwind/react";

const year = new Date().getFullYear();

export function Footer({ title, description, menus, copyright }) {
  return (
    <footer className="relative px-4 pt-8 pb-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap pt-6 text-center lg:text-left">
          <div className="w-full px-4 lg:w-6/12">
            <Typography variant="h4" className="mb-4" color="blue-gray">
              {title}
            </Typography>
            <Typography className="font-normal text-blue-gray-500 lg:w-2/5">
              {description}
            </Typography>
          </div>
          <div className="mx-auto mt-12 grid w-max grid-cols-2 gap-24 lg:mt-0">
            {menus.map(({ name, items }) => (
              <div key={name}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 block font-medium uppercase"
                >
                  {name}
                </Typography>
                <ul className="mt-3">
                  {items.map((item) => (
                    <li key={item.name}>
                      <Typography
                        as="a"
                        href={item.path}
                        target="_blank"
                        rel="noreferrer"
                        variant="small"
                        className="mb-2 block font-normal text-blue-gray-500 hover:text-blue-gray-700"
                      >
                        {item.name}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6 border-gray-300" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center">
            <Typography
              variant="small"
              className="font-normal text-blue-gray-500"
            >
              {copyright}
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  title: "Grade Report System",
  description:
    "Students are now able to access and report any grades that are inadvertently omitted from their academic profiles.",
  menus: [
    {
      name: "useful links",
      items: [
        {
          name: "Dashboard",
        },
        { name: "Grade Report" },
        {
          name: "Missing Grade Report",
        },
      ],
    },
    {
      name: "other resources",
      items: [{ name: "Contact Page" }, { name: "Help and Support" }],
    },
  ],
  copyright: <>Copyright © {year} Grade Report System </>,
};

Footer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  menus: PropTypes.arrayOf(PropTypes.object),
  copyright: PropTypes.node,
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
