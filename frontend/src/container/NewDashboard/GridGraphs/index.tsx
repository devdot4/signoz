import GridGraphLayout from 'container/GridGraphLayout';
import ComponentsSlider from 'container/NewDashboard/ComponentsSlider';
import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from 'store/reducers';
import DashboardReducer from 'types/reducer/dashboards';

import { GridComponentSliderContainer } from './styles';

const GridGraphs = (): JSX.Element => {
	const { isAddWidget } = useSelector<AppState, DashboardReducer>(
		(state) => state.dashboards,
	);

	return (
		<>
			<GridComponentSliderContainer>
				{isAddWidget && <ComponentsSlider />}

				<GridGraphLayout />
			</GridComponentSliderContainer>
		</>
	);
};

export default GridGraphs;
