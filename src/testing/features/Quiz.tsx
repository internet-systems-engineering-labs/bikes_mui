import { Box, Button, Container, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { quiz, tTasks } from "../quizData";
import Matching from './Matching';
import Sorting from './Sorting';
import { setLists } from './quizSlice';

function getShuffledItems(tasks: tTasks, type: 'M' | 'S') {
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

function Quiz() {
    const dispatch = useDispatch();
    const answerLists = useSelector((state: RootState) => state.lists.lists);
    const [results, setResults] = useState<number[] | null>(null);

    const checkQuiz = () => {
        const newResults = quiz.map((item, index) => {
            if (item.type === 'S') {
                return getSortingResult(item.tasks, answerLists[index]);
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
                            {correctCount === quiz[index].tasks.length
                                ? 'Все ответы верные.'
                                : `Верных ответов: ${correctCount}.`}
                        </Typography>
                    ))}
                </Box>
            )}
        </Container>
    );
}

export default Quiz
