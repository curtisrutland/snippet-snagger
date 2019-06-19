import React from "react";
import { styled } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Editor from ".";

const FlexCard = styled(Card)({
  display: "flex",
  flexFlow: "column nowrap"
})

export default function EditorCard({
  title,
  language,
  value,
  ...props
}) {
  return (
    <FlexCard {...props}>
      <CardHeader title={title} subheader={language.languageName} />
      <Editor readOnly value={value} language={language} />
    </FlexCard>
  )
}