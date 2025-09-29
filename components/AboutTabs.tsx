import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Link from "next/link"
import { Button } from "./ui/button"
import { FaArrowRight } from "react-icons/fa6";


export default function AboutTabs() {
  return (
    <Tabs
      defaultValue="tab-1"
      orientation="vertical"
      className="w-full flex-col"
    >
      <TabsList className="flex-row rounded-none bg-transparent p-0">
        <TabsTrigger
          value="tab-1"
          className=" data-[state=active]:bg-black data-[state=active]:rounded-md data-[state=active]:text-white"
        >
          Introduction
        </TabsTrigger>
        <TabsTrigger
          value="tab-2"
          className=" data-[state=active]:bg-black data-[state=active]:rounded-md data-[state=active]:text-white"
        >
          Education
        </TabsTrigger>
        <TabsTrigger
          value="tab-3"
          className=" data-[state=active]:bg-black data-[state=active]:rounded-md data-[state=active]:text-white"
        >
          Projects
        </TabsTrigger>

        <TabsTrigger
          value="tab-4"
          className=" data-[state=active]:bg-black data-[state=active]:rounded-md data-[state=active]:text-white"
        >
          Skills
        </TabsTrigger>

        <TabsTrigger
          value="tab-5"
          className=" data-[state=active]:bg-black data-[state=active]:rounded-md data-[state=active]:text-white"
        >
          Strengths
        </TabsTrigger>
      </TabsList>
      <div className="grow rounded-md border text-start">
        <TabsContent value="tab-1">
          <div className="flex flex-col gap-2 p-5">
            <p>
              Hi, my name is Nabil Siddik. I live in Dhaka, Bangladesh. I am very passionate about programming. I enjoy building modern, responsive, and user-friendly websites that solve real problems
            </p>
            <p>
              Over time, I have gained strong skills in both frontend and backend development, working with technologies like HTML, CSS, Tailwind CSS, JavaScript, React.js, Redux, Next.js, Node.js, and Express.js as well as databases like MongoDB.
            </p>
            <p>
              My goal is to keep learning and keep myself updated with the latest technologies. I’m always eager to take on new challenges, whether it’s a personal project, a freelance job, or a team collaboration.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="tab-2">
          <div className="flex flex-col gap-2 p-5">
            <p>
              I am currently pursuing my Bachelor’s degree in Computer Science and Engineering (CSE) at Bangladesh University of Business and Technology.
            </p>
            <p>
              Through my coursework, I have gained a solid foundation in programming, software engineering, databases, computer networks, and artificial intelligence
            </p>
            <p>
              Alongside academics, I actively work on projects that combine theory with practical implementation in team collaboration. These help me to build my collaboration, communication, and leadership skills.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="tab-3">
          <div className="flex flex-col gap-2 p-5">
            <p>
              I have gained hands-on experience by building real-world projects. These projects allowed me to apply my skills in frontend and backend development, databases, responsive design, and problem-solving, giving me practical knowledge beyond just theory
            </p>
            <p>
              I strongly believe projects speak louder than words — so I’ve showcased them here for you to explore
            </p>
            <Link href={'/projects'} className="mt-3 cursor-pointer">
              <Button>All Projects <FaArrowRight /></Button>
            </Link>
          </div>
        </TabsContent>
        <TabsContent value="tab-4">
          <ul className="flex flex-col gap-3 p-5">
            <li><b>Front End:</b> HTML5, CSS3, Tailwind CSS, React.js, Redux Toolkit, RTK Query, Next.js, Bootstrap, SASS, Javascript, Typescript</li>
            <li><b>Back End:</b> Node.js, Express.js, MongoDB, Mongoose, Next.js, Post Man, REST api, Javascript, Typescript</li>
            <li><b>Other Skills:</b> Project Management, Communication, Colaboration, Team Work, Adaptability.</li>
          </ul>
        </TabsContent>
        <TabsContent value="tab-5">
          <ul className="flex flex-col gap-3 p-5">
            <li>Strong passion for problem-solving and writing clean, efficient code</li>
            <li>Ability to build responsive, user-friendly web applications</li>
            <li>Quick learner, always eager to explore new technologies and frameworks</li>
            <li>Strong focus on continuous improvement and self-learning</li>
            <li>Excellent at project-based learning and turning ideas into real applications</li>
          </ul>
        </TabsContent>
      </div>
    </Tabs>
  )
}
