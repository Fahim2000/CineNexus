import { useEffect } from "react";

export const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | CineNexus`;
  });

  return null;
};

export default useTitle
