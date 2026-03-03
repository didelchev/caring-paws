import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useGetAllDogs } from "../../hooks/useDogs";

import PetCard from "../../components/PetCard/PetCard";
import Footer from "../../components/Footer/Footer";
import Loading from "../../components/Loading/Loading";
import Filters, { applyFilters } from "../../components/Filters/Filters";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import "./PetCatalog.css";

const DEFAULT_FILTERS = { size: "All", sex: "All", age: "All", location: "" };

export default function PetCatalog() {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const [dogs] = useGetAllDogs();

  const visibleDogs = useMemo(() => {
    if (!dogs) return [];
    const searched = dogs.filter((dog) => {
      const q = query.toLowerCase();
      return (
        dog.name?.toLowerCase().includes(q) ||
        dog.breed?.toLowerCase().includes(q) ||
        dog.location?.toLowerCase().includes(q)
      );
    });
    return applyFilters(searched, filters);
  }, [dogs, query, filters]);

  if (!dogs) return <Loading />;

  return (
    <>
      {/* Search */}
      <div className="catalog-search-wrapper">
        <form className="search" onSubmit={(e) => e.preventDefault()}>
          <span className="icon">
            <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
          </span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="search"
            placeholder="Search by name, breed or city..."
          />
        </form>
      </div>

      {/* Filters */}
      <Filters filters={filters} onChange={setFilters} />

      {/* Results */}
      <div className="catalog-results-bar">
        <span className="results-count">
          {visibleDogs.length} pet{visibleDogs.length !== 1 ? "s" : ""} found
        </span>
      </div>

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
              />
            </Link>
          ))
        )}
      </div>

      <Footer />
    </>
  );
}