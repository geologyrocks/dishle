import { env } from 'process'
import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the top 5 ingredients used to make a meal in 6 tries. After each
        guess, the color of the tiles will change to show how close your guess
        was to the meal's recipe.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="🍝"
          status="correct"
        />
        <Cell value="🥚" />
        <Cell value="🥓" />
        <Cell value="🧄" />
        <Cell value="🧀" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Pasta 🍝 is in spaghetti carbonara and is the main ingredient.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="🥩" />
        <Cell value="🧀" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="🍫"
          status="present"
        />
        <Cell value="🥚" />
        <Cell value="🧈" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Chocolate 🍫 is in brownies but is in a different order.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="🥥" />
        <Cell value="🧈" />
        <Cell value="🍒" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="🥦"
          status="absent"
        />
        <Cell value="🍯" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Broccoli 🥦 is not in a coconut-cherry slice at all.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        {process.env.REACT_APP_GAME_NAME} is an{' '}
        <a
          href="https://github.com/geologyrocks/dishle"
          className="underline font-bold"
        >
          open-source version
        </a>{' '}
        of that other well-known word guessing game, built upon{' '}
        <a
          href="https://github.com/cwakerfuss/reactle"
          className="underline font-bold"
        >
          {' '}
          Reactle
        </a>{' '}
        and inspired by{' '}
        <a href="https://cogit.fun/cloudle" className="underline font-bold">
          Cloudle
        </a>
        .
      </p>
      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        Made by Ed Hughes-Phillips.
      </p>
    </BaseModal>
  )
}
