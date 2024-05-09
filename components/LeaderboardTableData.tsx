import { LeaderboardTableDataItem, TypeLeaderboardTableDataProps } from '@/Interfaces'

const LeaderboardTableData: React.FC<TypeLeaderboardTableDataProps> = (props) => {

  return (
    <>
    <div className='overflow-y-auto border-gray-700 rounded-3xl border backdrop-filter backdrop-blur-md bg-white bg-opacity-[3%]'>
                <table className='w-full text-sm text-gray-300'>
                    <tbody>
                    <tr className='bg-opacity-[10%] bg-white rounded-3xl'>
                        <th className='p-4 rounded-tl-3xl'>Rank</th>
                        <th className='p-4'>Address</th>
                        <th className='p-4'>Trades (USD)</th>
                        <th className='p-4 rounded-tr-3xl'>Rewards (PNX)</th>
                    </tr>
                    {props.leaderboardTableData.map((item:LeaderboardTableDataItem, index:number) => (
                        <tr key={index} className="text-center">
                            <td className="p-4">
                            {typeof item.rank === 'string' ? item.rank : index + 1}
                            </td>
                            <td className="p-4">{item.address}</td>
                            <td className="p-4">{item.trades.toLocaleString()}</td>
                            <td className="p-4">{item.rewards.toLocaleString()}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
    </>
  )
}

export default LeaderboardTableData