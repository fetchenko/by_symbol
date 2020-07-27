import React, { useEffect, useRef } from "react";
import { useIntl } from "react-intl";
import { useLocation } from 'react-router-dom';
import { BlockMenuItem as BlockMenuItemView } from "styled/menu";
import { Link } from 'react-router-dom';
import { useDrag } from 'react-dnd';
import { getSymbolIdFromRoute } from 'helpers/navigation';
import ImageButtonWithLoader from "components/blocks/imageButtonWithLoader";
import GridLoading from "components/blocks/gridLoading";
import { createHashLink } from 'helpers/link';
import { DragTypes } from "constants/dragTypes";

function BlockMenuItem({ item }) {
	const location = useLocation();
	const intl = useIntl();
	const activeItemRef = useRef(null);

	useEffect(() => {
		ensureActiveItemVisible();
	}, [location.hash]);

	const [{ isDragging }, drag] = useDrag({
		item: {
			type: DragTypes.SYMBOL,
			id: item.path,
		},
		collect: (monitor) => ({
			isDragging: !!monitor.isDragging()
		})
	})


	console.log({ isDragging })

	function ensureActiveItemVisible() {
		if (activeItemRef && activeItemRef.current) {
			activeItemRef.current.scrollIntoView({
				behavior: "smooth",
				inline: "center"
			});
		}
	}

	const symbolId = getSymbolIdFromRoute(location);

	const active = (symbolId === item.path);

	const menuItemProps = {
		ref: (active) ? activeItemRef : null,
	}

	return (
		<BlockMenuItemView  {...menuItemProps}>
			{item.img && (
				<Link to={createHashLink(item.path)}>
					<div ref={drag}>
						<ImageButtonWithLoader
							src={item.img}
							alt={intl.formatMessage({ id: item.title })}
							active={active}
							selected={isDragging}
							loaderComponent={LoaderComponent}
						/>
					</div>
				</Link>
			)}
		</BlockMenuItemView>
	);
};

function LoaderComponent() {
	return <GridLoading containerProps={{ rows: 6, columns: 8 }} />;
};

export default BlockMenuItem;
