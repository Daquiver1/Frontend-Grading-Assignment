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
        <div className="absolute top-0 h-full w-full bg-[url('https://img.freepik.com/free-photo/young-student-working-assignment_23-2149257237.jpg?w=1060&t=st=1702459996~exp=1702460596~hmac=566df6567a748ce9e7d14c2ddb4c14b9c6fdef64d0f44fb17d6eff74dcfd4f09')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                STUDENT SERVICES
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                Hello, official Missing Grade Reporting Server! Designed
                to help students track and report missing grades in their
                academic profiles.
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
