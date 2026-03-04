import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faSlidersH, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./Filters.css";

const SIZES = ["All", "Small", "Medium", "Large", "Giant"];
const SEXES = ["All", "Male", "Female"];
const AGES = ["All", "Puppy (0–1yr)", "Young (1–3yr)", "Adult (3–7yr)", "Senior (7yr+)"];

function matchAge(dogAge, filter) {
  if (filter === "All") return true;
  const raw = dogAge?.toLowerCase() || "";
  const num = parseFloat(raw);
  if (isNaN(num)) return true;
  if (filter === "Puppy (0–1yr)") return num < 1;
  if (filter === "Young (1–3yr)") return num >= 1 && num < 3;
  if (filter === "Adult (3–7yr)") return num >= 3 && num < 7;
  if (filter === "Senior (7yr+)") return num >= 7;
  return true;
}

export function applyFilters(dogs, filters) {
  return dogs.filter((dog) => {
    const q = filters.query?.toLowerCase() || "";

    const searchMatch =
      !q ||
      dog.name?.toLowerCase().includes(q) ||
      dog.breed?.toLowerCase().includes(q) ||
      dog.location?.toLowerCase().includes(q);

    const sizeMatch =
      filters.size === "All" ||
      dog.size?.toLowerCase().includes(filters.size.toLowerCase());

    const sexMatch =
      filters.sex === "All" ||
      dog.sex?.toLowerCase() === filters.sex.toLowerCase();

    const ageMatch = matchAge(dog.age, filters.age);

    const locationMatch =
      !filters.location ||
      dog.location?.toLowerCase().includes(filters.location.toLowerCase());

    return searchMatch && sizeMatch && sexMatch && ageMatch && locationMatch;
  });
}

export default function Filters({ filters, onChange, totalCount, filteredCount }) {
  const [expanded, setExpanded] = useState(false);

  const update = (key, value) => onChange({ ...filters, [key]: value });

  const activeFilterCount = [
    filters.size !== "All",
    filters.sex !== "All",
    filters.age !== "All",
    filters.location !== "",
  ].filter(Boolean).length;

  const reset = () =>
    onChange({ query: filters.query || "", size: "All", sex: "All", age: "All", location: "" });

  return (
    <div className="filters-wrap">
      {/* Top bar: search + toggle */}
      <div className="filters-topbar">
        <div className="filters-search">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="fsearch-icon" />
          <input
            type="search"
            className="filters-search-input"
            placeholder="Search by name, breed or city…"
            value={filters.query || ""}
            onChange={(e) => update("query", e.target.value)}
          />
          {filters.query && (
            <button className="fsearch-clear" onClick={() => update("query", "")}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
          )}
        </div>

        <button
          className={`filters-toggle-btn ${expanded ? "open" : ""} ${activeFilterCount > 0 ? "has-active" : ""}`}
          onClick={() => setExpanded((v) => !v)}
        >
          <FontAwesomeIcon icon={faSlidersH} />
          <span>Filters</span>
          {activeFilterCount > 0 && (
            <span className="filters-badge">{activeFilterCount}</span>
          )}
        </button>

        <span className="filters-count-label">
          {filteredCount} of {totalCount} pets
        </span>
      </div>

      {/* Expandable filter panel */}
      <div className={`filters-panel ${expanded ? "filters-panel--open" : ""}`}>
        <div className="filters-panel-inner">

          <div className="filter-row">
            <span className="filter-row-label">Size</span>
            <div className="filter-pills">
              {SIZES.map((s) => (
                <button
                  key={s}
                  className={`filter-pill ${filters.size === s ? "active" : ""}`}
                  onClick={() => update("size", s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-row">
            <span className="filter-row-label">Sex</span>
            <div className="filter-pills">
              {SEXES.map((s) => (
                <button
                  key={s}
                  className={`filter-pill ${filters.sex === s ? "active" : ""}`}
                  onClick={() => update("sex", s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-row">
            <span className="filter-row-label">Age</span>
            <div className="filter-pills">
              {AGES.map((a) => (
                <button
                  key={a}
                  className={`filter-pill ${filters.age === a ? "active" : ""}`}
                  onClick={() => update("age", a)}
                >
                  {a}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-row">
            <span className="filter-row-label">Location</span>
            <input
              className="filter-location-input"
              type="text"
              placeholder="Any city…"
              value={filters.location}
              onChange={(e) => update("location", e.target.value)}
            />
          </div>

          {activeFilterCount > 0 && (
            <button className="filter-reset" onClick={reset}>
              <FontAwesomeIcon icon={faXmark} /> Clear {activeFilterCount} filter{activeFilterCount > 1 ? "s" : ""}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}