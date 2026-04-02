import { Box, Button, Container, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { quiz, tTasks } from "../quizData";
import Matching from './Matching';
import MultipleChoice from './MultipleChoice';
import SingleChoice from './SingleChoice';
import Sorting from './Sorting';
import { setLists } from './quizSlice';
import { tQuizzes } from '../quizData';

function getShuffledItems(tasks: tTasks, type: 'M' | 'S' | 'O' | 'C') {
    if (type === 'O' || type === 'C') {
        return tasks.map(() => '');
    }

    const shuffledAnswers = tasks.map((task) =>
        type === 'M' ? task.answer : task.question
    );

    for (let i = shuffledAnswers.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledAnswers[i], shuffledAnswers[j]] = [shuffledAnswers[j], shuffledAnswers[i]];
    }

    return shuffledAnswers;
}

function getSortingResult(tasks: tTasks, currentList: string[] = []) {
    const correctList = [...tasks]
        .sort((first, second) => Number(first.answer) - Number(second.answer))
        .map((task) => task.question);

    return correctList.reduce((count, question, index) => {
        return count + (question === currentList[index] ? 1 : 0);
    }, 0);
}

function getMultipleChoiceResult(tasks: tTasks, currentList: string[] = []) {
    return tasks.reduce((score, task, taskIndex) => {
        const correctOptions = task.answer ? task.answer.split(' | ') : [];
        const selectedOptions = currentList[taskIndex] ? currentList[taskIndex].split(' | ') : [];

        const taskScore = (task.options || []).reduce((count, option) => {
            const shouldBeChecked = correctOptions.includes(option);
            const isChecked = selectedOptions.includes(option);

            return count + (shouldBeChecked === isChecked ? 1 : 0);
        }, 0);

        return score + taskScore;
    }, 0);
}

function getMaxScore(quizItem: tQuizzes[number]) {
    if (quizItem.type === 'C') {
        return quizItem.tasks.reduce((count, task) => count + (task.options?.length || 0), 0);
    }

    return quizItem.tasks.length;
}

function Quiz() {
    const dispatch = useDispatch();
    const answerLists = useSelector((state: RootState) => state.lists.lists);
    const [results, setResults] = useState<number[] | null>(null);

    const checkQuiz = () => {
        const newResults = quiz.map((item, index) => {
            if (item.type === 'S') {
                return getSortingResult(item.tasks, answerLists[index]);
            }

            if (item.type === 'C') {
                return getMultipleChoiceResult(item.tasks, answerLists[index]);
            }

            return item.tasks.reduce((count, task, taskIndex) => {
                return count + (task.answer === answerLists[index]?.[taskIndex] ? 1 : 0);
            }, 0);
        });

        setResults(newResults);
    };

    const restartQuiz = () => {
        dispatch(setLists(quiz.map((item) => getShuffledItems(item.tasks, item.type))));
        setResults(null);
    };

    return (
        <Container maxWidth="md">
            {quiz.map((item, index) => (
                <Box key={item.id} component="section" sx={{ m: 2, p:2 }}>
                    <Typography variant="h5" gutterBottom>
                        {index + 1}. { item.title }
                    </Typography>
                    {item.type === 'M' && <Matching index={index} tasks={item.tasks}/>}
                    {item.type === 'S' && <Sorting index={index} tasks={item.tasks}/>}
                    {item.type === 'O' && <SingleChoice index={index} tasks={item.tasks}/>}
                    {item.type === 'C' && <MultipleChoice index={index} tasks={item.tasks}/>}
                </Box>
            ))}
            <Box sx={{ display: 'flex', justifyContent:'space-around' }}>
                <Button variant="contained" onClick={checkQuiz}>Проверить</Button>
                <Button variant="contained" onClick={restartQuiz}>Начать снова</Button>
            </Box>
            {results && (
                <Box component="section" sx={{ mt: 3, textAlign: 'center' }}>
                    <Typography variant="h5" gutterBottom>
                        Результаты тестирования
                    </Typography>
                    {results.map((correctCount, index) => (
                        <Typography key={quiz[index].id}>
                            Задание {index + 1}.{' '}
                            {correctCount === getMaxScore(quiz[index])
                                ? 'Все ответы верные.'
                                : `Набрано баллов: ${correctCount} из ${getMaxScore(quiz[index])}.`}
                        </Typography>
                    ))}
                </Box>
            )}
        </Container>
    );
}

export default Quiz
