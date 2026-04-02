import {
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
    Stack,
    Typography,
} from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { tTasks } from '../quizData';
import { addList, setDraggedItems } from './quizSlice';

interface ComponentProps {
    index: number;
    tasks: tTasks;
}

function SingleChoice({ index, tasks }: ComponentProps) {
    const dispatch = useDispatch();
    const selectedAnswers = useSelector((state: RootState) => state.lists.lists[index] || []);

    useEffect(() => {
        dispatch(addList({ index, items: tasks.map(() => '') }));
    }, [dispatch, index, tasks]);

    const handleChange = (taskIndex: number, value: string) => {
        const updatedAnswers = [...selectedAnswers];
        updatedAnswers[taskIndex] = value;
        dispatch(setDraggedItems({ index, items: updatedAnswers }));
    };

    return (
        <Stack spacing={3}>
            {tasks.map((task, taskIndex) => (
                <FormControl key={task.question}>
                    <Typography sx={{ mb: 1 }}>
                        {task.question}
                    </Typography>
                    <RadioGroup
                        value={selectedAnswers[taskIndex] || ''}
                        onChange={(event) => handleChange(taskIndex, event.target.value)}
                    >
                        {task.options?.map((option) => (
                            <FormControlLabel
                                key={option}
                                value={option}
                                control={<Radio />}
                                label={option}
                            />
                        ))}
                    </RadioGroup>
                </FormControl>
            ))}
        </Stack>
    );
}

export default SingleChoice;
