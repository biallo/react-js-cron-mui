import React from 'react'

export default function Cron() {
  return <h1>ICI</h1>
  // return (
  //   <div className={internalClassName}>
  //     <h1>ICI</h1>
  //     <FormGroup>
  //       <Period
  //         value={periodForRender}
  //         setValue={setPeriod}
  //         locale={locale}
  //         className={className}
  //         disabled={disabled}
  //         readOnly={readOnly}
  //         shortcuts={shortcuts}
  //         {...selectProps}
  //       />
  //     </FormGroup>

  //     {periodForRender === 'reboot' ? (
  //       clearButtonNode
  //     ) : (
  //       <>
  //         {periodForRender === 'year' && (
  //           <FormGroup>
  //             <Months
  //               value={months}
  //               setValue={setMonths}
  //               locale={locale}
  //               className={className}
  //               humanizeLabels={humanizeLabels}
  //               disabled={disabled}
  //               readOnly={readOnly}
  //               period={periodForRender}
  //               {...selectProps}
  //             />
  //           </FormGroup>
  //         )}

  //         {(periodForRender === 'year' || periodForRender === 'month') && (
  //           <FormGroup>
  //             <MonthDays
  //               value={monthDays}
  //               setValue={setMonthDays}
  //               locale={locale}
  //               className={className}
  //               weekDays={weekDays}
  //               disabled={disabled}
  //               readOnly={readOnly}
  //               leadingZero={leadingZero}
  //               period={periodForRender}
  //               {...selectProps}
  //             />
  //           </FormGroup>
  //         )}

  //         {(periodForRender === 'year' ||
  //           periodForRender === 'month' ||
  //           periodForRender === 'week') && (
  //             <FormGroup>
  //               <WeekDays
  //                 value={weekDays}
  //                 setValue={setWeekDays}
  //                 locale={locale}
  //                 className={className}
  //                 humanizeLabels={humanizeLabels}
  //                 monthDays={monthDays}
  //                 disabled={disabled}
  //                 readOnly={readOnly}
  //                 period={periodForRender}
  //                 {...selectProps}
  //               />
  //             </FormGroup>
  //           )}

  //         <div>
  //           {periodForRender !== 'minute' && periodForRender !== 'hour' && (
  //             <FormGroup>
  //               <Hours
  //                 value={hours}
  //                 setValue={setHours}
  //                 locale={locale}
  //                 className={className}
  //                 disabled={disabled}
  //                 readOnly={readOnly}
  //                 leadingZero={leadingZero}
  //                 clockFormat={clockFormat}
  //                 period={periodForRender}
  //                 {...selectProps}
  //               />
  //             </FormGroup>
  //           )}

  //           {periodForRender !== 'minute' && (
  //             <FormGroup>
  //               <Minutes
  //                 value={minutes}
  //                 setValue={setMinutes}
  //                 locale={locale}
  //                 period={periodForRender}
  //                 className={className}
  //                 disabled={disabled}
  //                 readOnly={readOnly}
  //                 leadingZero={leadingZero}
  //                 clockFormat={clockFormat}
  //                 {...selectProps}
  //               />
  //             </FormGroup>
  //           )}

  //           {clearButtonNode}
  //         </div>
  //       </>
  //     )}
  //   </div>
  // )
}
