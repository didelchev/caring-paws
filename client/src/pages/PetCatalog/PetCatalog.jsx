import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useGetAllDogs } from "../../hooks/useDogs";

import PetCard from "../../components/PetCard/PetCard";
import Footer from "../../components/Footer/Footer";
import Loading from "../../components/Loading/Loading";
import Filters, { applyFilters } from "../../components/Filters/Filters";

import "./PetCatalog.css";

const DEFAULT_FILTERS = { query: "", size: "All", sex: "All", age: "All", location: "" };

export default function PetCatalog() {
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const [dogs] = useGetAllDogs();

  const visibleDogs = useMemo(() => {
    if (!dogs) return [];
    return applyFilters(dogs, filters);
  }, [dogs, filters]);

  if (!dogs) return <Loading />;

  return (
    <>
      <div className="catalog-toppad" />

      <Filters
        filters={filters}
        onChange={setFilters}
        totalCount={dogs.length}
        filteredCount={visibleDogs.length}
      />

      <div className="catalog-page">
        {visibleDogs.length === 0 ? (
          <div className="catalog-empty">
            <span>🐾</span>
            <p>No pets match your search. Try adjusting the filters!</p>
          </div>
        ) : (
          visibleDogs.map((dog) => (
            <Link to={`/petcatalog/${dog._id}`} key={dog._id}>
              <PetCard
                img={dog.imageUrl}
                name={dog.name}
                breed={dog.breed}
                age={dog.age}
                location={dog.location}
                sex={dog.sex}
                size={dog.size}
              />
            </Link>
          ))
        )}
      </div>

      <Footer />
    </>
  );
}