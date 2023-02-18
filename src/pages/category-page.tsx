import { GridItem, Heading } from "@chakra-ui/react";
import PreviewCard from "../components/category/preview-card";

import { useEffect } from "react";

import ResponsiveGrid from "../components/layout/responsive-grid";

import { useDispatch, useSelector } from "react-redux";

import {
  selectCategoryData,
  selectCategoryRequestError,
  selectCategoryRequestStatus,
} from "../store/category/category.selector";
import { fetchCategoryList } from "../store/category/category.slice";
import { AppDispatch } from "../store/store";

//FIXME - ugly
export default function CategoryPage() {
  const dispatch = useDispatch<AppDispatch>();
  const categoryList = useSelector(selectCategoryData);
  const requestStatus = useSelector(selectCategoryRequestStatus);
  const requestError = useSelector(selectCategoryRequestError);
  useEffect(() => {
    const x = async () => {
      if (requestStatus === "idle") {
        dispatch(fetchCategoryList());
      }
    };
    x();
  }, [requestStatus, dispatch]);

  return (
    <>
      <Heading my={12}>Start your shopping!</Heading>
      <ResponsiveGrid desktopCol={3} mobileCol={1} gap={4}>
        {categoryList.map((item) => {
          return (
            <GridItem h={"64"} w={"96"} key={item.CateName}>
              <PreviewCard category={item} />
            </GridItem>
          );
        })}
      </ResponsiveGrid>
      {requestError}
    </>
  );
}
