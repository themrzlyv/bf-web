import React from "react";
import { Typography } from "ui";

export function formErrorMapper(errors: unknown): React.ReactNode[] {
  return Object.values(errors || {}).map((el, i) => (
    <Typography key={i} variant="small" color="danger">
      {el}
    </Typography>
  ));
}
