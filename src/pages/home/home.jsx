import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import { FingerPrintIcon, UsersIcon } from "@heroicons/react/24/solid";
import { FeatureCard } from "../../widgets/cards/index";
import { FeatureData } from "../../data/index";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('https://img.freepik.com/free-photo/young-student-working-assignment_23-2149257188.jpg?w=1060&t=st=1702228400~exp=1702229000~hmac=c4ae266d941d29b0659fefed41a2390accc7f6dcfc8a4435fe76d8336899fcca')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                Missing Grade Report System.
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                This is a simple example of a Landing Page you can build.
              </Typography>
            </div>
          </div>
        </div>
      </div>

      <section className="-mt-32 bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {FeatureData.map(({ color, title, icon, screen, description }) => (
              <Link key={title} to={`${screen}`}>
                <FeatureCard
                  color={color}
                  title={title}
                  icon={React.createElement(icon, {
                    className: "w-5 h-5 text-white",
                  })}
                  description={description}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
