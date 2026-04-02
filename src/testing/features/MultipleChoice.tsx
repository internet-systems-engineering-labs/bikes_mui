import {
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
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

function getNormalizedAnswer(values: string[]) {
    return [...values].sort().join(' | ');
}

function MultipleChoice({ index, tasks }: ComponentProps) {
    const dispatch = useDispatch();
    const selectedAnswers = useSelector((state: RootState) => state.lists.lists[index] || []);

    useEffect(() => {
        dispatch(addList({ index, items: tasks.map(() => '') }));
    }, [dispatch, index, tasks]);

    const handleChange = (taskIndex: number, option: string, isChecked: boolean) => {
        const currentValues = selectedAnswers[taskIndex]
            ? selectedAnswers[taskIndex].split(' | ')
            : [];
        const updatedValues = isChecked
            ? [...currentValues, option]
            : currentValues.filter((item) => item !== option);
        const updatedAnswers = [...selectedAnswers];

        updatedAnswers[taskIndex] = getNormalizedAnswer(updatedValues);
        dispatch(setDraggedItems({ index, items: updatedAnswers }));
    };

    return (
        <Stack spacing={3}>
            {tasks.map((task, taskIndex) => {
                const currentValues = selectedAnswers[taskIndex]
                    ? selectedAnswers[taskIndex].split(' | ')
                    : [];

                return (
                    <FormControl key={task.question}>
                        <Typography sx={{ mb: 1 }}>
                            {task.question}
                        </Typography>
                        <FormGroup>
                            {task.options?.map((option) => (
                                <FormControlLabel
                                    key={option}
                                    control={
                                        <Checkbox
                                            checked={currentValues.includes(option)}
                                            onChange={(event) =>
                                                handleChange(
                                                    taskIndex,
                                                    option,
                                                    event.target.checked,
                                                )
                                            }
                                        />
                                    }
                                    label={option}
                                />
                            ))}
                        </FormGroup>
                    </FormControl>
                );
            })}
        </Stack>
    );
}

export default MultipleChoice;
