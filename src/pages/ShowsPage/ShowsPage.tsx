import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Shows from "../../components/Shows";
import { getShows } from "../../slices/showsSlice";
import { RootState } from "../../store";

const ShowsPage = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state: RootState) => state.shows);
  
  useEffect(() => {
    if(!data.length){
      dispatch(getShows());
    }
  }, [dispatch, data]);

  return <Shows data={data} />;
};
export default ShowsPage;
