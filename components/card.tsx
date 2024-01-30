import React from 'react'
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import Link from 'next/link';

interface CardProps {
  name: string;
  description: string;
  link: string;
};

const ProjectCard: React.FC<CardProps> = ({ name, description, link }) => {
  return (
    <Card>
      <Link href={link}>
        <CardHeader>
          <CardTitle>{ name }</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mt-auto">{ description }</p>
        </CardContent>
      </Link>
    </Card>
  )
}

export default ProjectCard;