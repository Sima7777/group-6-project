import { useState } from 'react'
import ExpenseView from '../BalanceView/ExpencesView/ExpencesView'
import Summary from '../../components/Summary'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import s from './BalanceView.module.css'
import { TransactionsWrapper } from '../../components/TransactionsWrapper/TransactionsWrapper.styled'

const BalanceView = () => {
  const [expense, setExpense] = useState(true)
  const [profits, setProfits] = useState(false)

  const clickExpense = () => {
    if (expense) return
    setProfits(false)
    setExpense(true)
  }

  const clickProfits = () => {
    if (profits) return
    setProfits(true)
    setExpense(false)
  }

  const viewPort = useWindowDimensions()

  return (
    <TransactionsWrapper>
      <div>
        <button
          type="button"
          onClick={clickExpense}
          className={
            expense
              ? `${s.counter_tab_header_buttons} ${s.counter_tab_active}`
              : `${s.counter_tab_header_buttons}`
          }
        >
          Расход
        </button>
        <button
          type="button"
          onClick={clickProfits}
          className={
            profits
              ? `${s.counter_tab_header_buttons} ${s.counter_tab_active}`
              : `${s.counter_tab_header_buttons}`
          }
        >
          Доход
        </button>
      </div>
      {expense && viewPort.width > 771 && <Summary />}
      {!expense && viewPort.width > 771 && <Summary profits={profits} />}
      <ExpenseView />
    </TransactionsWrapper>
  )
}

export default BalanceView
