import React, { useCallback, useEffect, useState } from 'react'

import { useWallet } from 'use-wallet'
import useSushi from '../../hooks/useSushi'

import { bnToDec } from '../../utils'
import { getMasterChefContract, getEarned } from '../../bao/utils'
import { getFarms } from '../../bao/utils'

import Context from './context'
import { Farm } from './types'

const Farms: React.FC = ({ children }) => {
	const [unharvested, setUnharvested] = useState(0)

	const sushi = useSushi()
	const { account } = useWallet()

	const farms = getFarms(sushi)

	return (
		<Context.Provider
			value={{
				farms,
				unharvested,
			}}
		>
			{children}
		</Context.Provider>
	)
}

export default Farms
