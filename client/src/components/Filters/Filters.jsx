import React from "react";
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

    return sizeMatch && sexMatch && ageMatch && locationMatch;
  });
}

export default function Filters({ filters, onChange }) {
  const update = (key, value) => onChange({ ...filters, [key]: value });

  const activeCount = [
    filters.size !== "All",
    filters.sex !== "All",
    filters.age !== "All",
    filters.location !== "",
  ].filter(Boolean).length;

  const reset = () =>
    onChange({ size: "All", sex: "All", age: "All", location: "" });

  return (
    <div className="filters-bar">
      <div className="filters-inner">
        <span className="filters-label">Filter by:</span>

        {/* Size */}
        <div className="filter-group">
          <span className="filter-group-label">Size</span>
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

        {/* Sex */}
        <div className="filter-group">
          <span className="filter-group-label">Sex</span>
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

        {/* Age */}
        <div className="filter-group">
          <span className="filter-group-label">Age</span>
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

        {/* Location */}
        <div className="filter-group">
          <span className="filter-group-label">Location</span>
          <input
            className="filter-location-input"
            type="text"
            placeholder="City..."
            value={filters.location}
            onChange={(e) => update("location", e.target.value)}
          />
        </div>

        {activeCount > 0 && (
          <button className="filter-reset" onClick={reset}>
            Clear {activeCount} filter{activeCount > 1 ? "s" : ""}
          </button>
        )}
      </div>
    </div>
  );
}