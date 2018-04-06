import React from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';

function Filters({ currentActiveFilter, allPosibleFilters, onSelectFilter }) {
	return (
		<div>
			<div className="d-flex justify-content-end">
			<button className="text-uppercase btn btn-light" disabled>Filters:</button>
				{allPosibleFilters.map( filter => (
					<button 
						className="btn btn-light text-danger"
						type="button"
						onClick={ () => {
							onSelectFilter(filter);
						}}
						key={filter}>
							{filter}</button>
				))}
			</div>
		</div>
	);
}

function getAllPosibleFilters(filters) {
	const listFilters = [];
	for (const key in filters) {
		if (filters.hasOwnProperty(key)) {
			listFilters.push(filters[key]);			
		}
	}
	return listFilters;
}

function mapStateToProps({visibilityFilter}, {visibilityFilters}) {
	return {
		currentActiveFilter: visibilityFilter,
		allPosibleFilters: getAllPosibleFilters(visibilityFilters)
	};
}

function mapDispatchToProps(dispatch) {
	return {
		onSelectFilter: (filter) => {
			dispatch(setVisibilityFilter(filter));
		}	
	};
}



export default connect(mapStateToProps, mapDispatchToProps)(Filters);
