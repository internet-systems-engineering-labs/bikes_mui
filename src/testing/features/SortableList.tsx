import { DndContext, closestCenter, type Modifier } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy, arrayMove } from '@dnd-kit/sortable';
import List from '@mui/material/List';
import { SortableItem } from '../components/SortableItem'
import { useDispatch, useSelector } from 'react-redux';
import { setDraggedItems } from './quizSlice';
import { RootState } from '../../store';

interface ComponentProps {
    index: number,
    answers: string[];
}

const restrictToListBounds: Modifier = ({
    transform,
    containerNodeRect,
    draggingNodeRect,
}) => {
    if (!draggingNodeRect || !containerNodeRect) {
        return transform;
    }

    const minY = containerNodeRect.top - draggingNodeRect.top;
    const maxY = containerNodeRect.bottom - draggingNodeRect.bottom;

    return {
        ...transform,
        x: 0,
        y: Math.min(Math.max(transform.y, minY), maxY),
    };
};

function SortableList({ index, answers }: ComponentProps ) {
    const dispatch = useDispatch();
    const arr = useSelector((state: RootState) => state.lists.lists[index]);
    const draggedItems = arr || answers;
    const handleDragEnd = (event: any) => {
        const { active, over } = event;
        if (active.id !== over.id) {
            const oldIndex = draggedItems.indexOf(active.id);
            const newIndex = draggedItems.indexOf(over.id);
            const newList = arrayMove(draggedItems, oldIndex, newIndex);
            dispatch(setDraggedItems({ index, items: newList }));
        }
    };

    return (
        <DndContext
            collisionDetection={closestCenter}
            modifiers={[restrictToListBounds]}
            onDragEnd={handleDragEnd}
        >
            <SortableContext items={ draggedItems } strategy={verticalListSortingStrategy}>
                <List>
                    {draggedItems.map((item) => (
                        <SortableItem key={ item } item={ item } />
                    ))}
                </List>
            </SortableContext>
        </DndContext>
    );
}

export default SortableList;
