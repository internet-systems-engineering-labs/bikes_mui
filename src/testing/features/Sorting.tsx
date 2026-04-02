import { Box } from '@mui/material';
import { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { tTasks } from '../quizData';
import { addList } from './quizSlice';
import SortableList from './SortableList';

interface ComponentProps {
    index: number;
    tasks: tTasks;
}

function Sorting({ index, tasks }: ComponentProps) {
    const answers = useMemo(() => {
        const shuffledItems = tasks.map((item) => item.question);

        for (let i = shuffledItems.length - 1; i > 0; i -= 1) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledItems[i], shuffledItems[j]] = [shuffledItems[j], shuffledItems[i]];
        }

        return shuffledItems;
    }, [tasks]);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(addList({ index, items: answers }));
    }, [answers, dispatch, index]);

    return (
        <Box sx={{ maxWidth: 650, mx: 'auto' }}>
            <SortableList index={index} answers={answers} />
        </Box>
    );
}

export default Sorting;
