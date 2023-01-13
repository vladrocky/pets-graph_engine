# simple_graph

Движок решает заачу высокопроизводительных вычислений.
![LevelsImage](./example.jpg)
## Задачи движка
1. работа в с 'слоистой' струтурой данных
2. каждый слой сам по себе граф
3. слои связанны между собой так же как и сами графы
4. все слои можно развернуть в один полносвязный граф
5. каждая вершина 'верхнего слоя' имеет отображение в не менее чем одну вершину в 'нижнем слое' (подгаф в своем слое)
6. связи между подграфами в слое однозначно соответсвуют их связям между их отображениями в соседних слоях

## Архитектура движка
Предполагается реализовать луковичную архитектуру
- [ ] simple_graph\graph_core.go -- домен, бизнес-логика движка
- [ ]