import { composeStories } from '@storybook/testing-react';
import { render, screen, within } from '@testing-library/react';
import * as TaskListStories from './TaskList.stories'; //👈  Our stories imported here

const { WithPinnedTasks } = composeStories(TaskListStories);

it('renders pinned tasks at the start of the list', () => {
  render(<WithPinnedTasks />);
  
  const firstTask = within(screen.getAllByRole('listitem')[0]).getByRole('textbox');
  expect(firstTask).toHaveDisplayValue(/pinned/i)
});
