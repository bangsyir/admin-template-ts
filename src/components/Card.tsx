type Props = {
  children?: JSX.Element
}
export const CardTitle = ({children}: Props) => {
  return (
    <div className="flex gap-3 items-center">
      {children}
    </div>
  )
}
export const CardContent = ({children}: Props) => {
  return (
    <>
    {children}
    </>
  )
}
export const Card = ({children}: Props) => {
  return (
    <div className="bg-white shadow-md rounded-md p-2">
      {children}
    </div>
  )
}