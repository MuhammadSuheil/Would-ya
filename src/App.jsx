import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Toaster } from 'react-hot-toast'

import SplashScreen from './components/SplashScreen'
import MainScreen from './components/MainScreen'
import WhyQuestionnaire from './components/WhyQuestionnaire'
import YesLoading from './components/YesLoading'
import DatePicker from './components/DatePicker'
import LocationPicker from './components/LocationPicker'
import ConfirmPopup from './components/ConfirmPopup'
import FinalPage from './components/FinalPage'
import FeedbackPopup from './components/FeedbackPopup'
import ClosurePage from './components/ClosurePage'
import { saveResponse } from './firebase'
import { pageVariants, splashVariants } from './transitions'

/**
 * App-level state machine:
 *  splash → main → [yesLoading | noWhy] → datePicker → locationPicker → final
 *
 * Page transitions are handled here via wrapper motion.div elements.
 * Each page component is a plain div (no page-level framer-motion).
 */

const WRAP = {
  position: 'absolute',
  inset: 0,
  width: '100%',
  minHeight: '100dvh',
}

export default function App() {
  const [screen, setScreen] = useState('splash')
  const [direction, setDirection] = useState(1)
  const [showConfirm, setShowConfirm] = useState(false)
  const [showFeedback, setShowFeedback] = useState(false)

  const [formData, setFormData] = useState({
    answer: null,
    reason: '',
    selectedDay: null,
    selectedLocation: null,
    customLocation: '',
    feedback: '',
  })

  function patch(updates) {
    setFormData(prev => ({ ...prev, ...updates }))
  }

  /** Navigate to a new screen with directional animation */
  function go(newScreen, dir = 1) {
    setDirection(dir)
    setScreen(newScreen)
  }

  // ---- Flow handlers ----

  function handleSplashDismiss()            { go('main', 1) }
  function handleYes()                       { patch({ answer: 'yes' }); go('yesLoading', 1) }
  function handleNoFinal()                   { patch({ answer: 'no' });  go('noWhy', 1) }
  function handleWhySubmitYes(reason)        { patch({ reason, answer: 'yes' }); go('yesLoading', 1) }
  function handleSorry(reason) {
    const updated = { ...formData, reason, answer: 'no' }
    patch({ reason, answer: 'no' })
    go('closure', 1)
    saveResponse(updated)
  }
  function handleYesLoadingComplete()        { go('datePicker', 1) }
  function handleDaySelected(day)            { patch({ selectedDay: day }) }
  function handleDayNext()                   { go('locationPicker', 1) }
  function handleDatePickerBack()            { go('main', -1) }
  function handleLocationSelected(loc)       { patch({ selectedLocation: loc }) }
  function handleCustomNote(note)            { patch({ customLocation: note }) }
  function handleLocationNext()              { setShowConfirm(true) }
  function handleLocationPickerBack()        { go('datePicker', -1) }
  function handleConfirmed() {
    setShowConfirm(false)
    go('final', 1)
    saveResponse(formData)
  }
  function handleEditChoice()                { setShowConfirm(false) }
  function handleFeedbackOpen()              { setShowFeedback(true) }
  function handleFeedbackClose()             { setShowFeedback(false) }

  function handleFeedbackSubmit(feedback) {
    const updated = { ...formData, feedback }
    patch({ feedback })
    setShowFeedback(false)
    saveResponse(updated)
  }

  return (
    <div className="relative" style={{ minHeight: '100dvh', overflow: 'hidden' }}>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '13px',
            fontWeight: 700,
            background: '#FFF9EF',
            color: '#1A1108',
            border: '3px solid #1A1108',
            borderRadius: '4px',
            boxShadow: '4px 4px 0 #1A1108',
          },
        }}
      />

      {/* ── Screen transitions — paper shuffle ── */}
      <AnimatePresence custom={direction} mode="sync">

        {screen === 'splash' && (
          <motion.div key="splash" style={WRAP}
            variants={splashVariants}
            initial="initial" animate="animate" exit="exit"
          >
            <SplashScreen onDismiss={handleSplashDismiss} />
          </motion.div>
        )}

        {screen === 'main' && (
          <motion.div key="main" custom={direction} style={WRAP}
            variants={pageVariants}
            initial="initial" animate="animate" exit="exit"
          >
            <MainScreen onYes={handleYes} onNoFinal={handleNoFinal} />
          </motion.div>
        )}

        {screen === 'noWhy' && (
          <motion.div key="noWhy" custom={direction} style={WRAP}
            variants={pageVariants}
            initial="initial" animate="animate" exit="exit"
          >
            <WhyQuestionnaire
              onYesAja={handleWhySubmitYes}
              onSorry={handleSorry}
              onBack={() => go('main', -1)}
            />
          </motion.div>
        )}

        {screen === 'yesLoading' && (
          <motion.div key="yesLoading" custom={direction} style={WRAP}
            variants={pageVariants}
            initial="initial" animate="animate" exit="exit"
          >
            <YesLoading onComplete={handleYesLoadingComplete} />
          </motion.div>
        )}

        {screen === 'datePicker' && (
          <motion.div key="datePicker" custom={direction} style={WRAP}
            variants={pageVariants}
            initial="initial" animate="animate" exit="exit"
          >
            <DatePicker
              selected={formData.selectedDay}
              onSelect={handleDaySelected}
              onNext={handleDayNext}
              onBack={handleDatePickerBack}
            />
          </motion.div>
        )}

        {screen === 'locationPicker' && (
          <motion.div key="locationPicker" custom={direction} style={WRAP}
            variants={pageVariants}
            initial="initial" animate="animate" exit="exit"
          >
            <LocationPicker
              selected={formData.selectedLocation}
              onSelect={handleLocationSelected}
              customNote={formData.customLocation}
              onCustomNote={handleCustomNote}
              onNext={handleLocationNext}
              onBack={handleLocationPickerBack}
            />
          </motion.div>
        )}

        {screen === 'final' && (
          <motion.div key="final" custom={direction} style={WRAP}
            variants={pageVariants}
            initial="initial" animate="animate" exit="exit"
          >
            <FinalPage
              day={formData.selectedDay}
              location={formData.selectedLocation}
              customNote={formData.customLocation}
              onFeedback={handleFeedbackOpen}
            />
          </motion.div>
        )}

        {screen === 'closure' && (
          <motion.div key="closure" custom={direction} style={WRAP}
            variants={pageVariants}
            initial="initial" animate="animate" exit="exit"
          >
            <ClosurePage />
          </motion.div>
        )}

      </AnimatePresence>

      {/* ── Overlaid popups ── */}
      <AnimatePresence>
        {showConfirm && (
          <ConfirmPopup
            key="confirm"
            day={formData.selectedDay}
            location={formData.selectedLocation}
            customNote={formData.customLocation}
            onConfirm={handleConfirmed}
            onEdit={handleEditChoice}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showFeedback && (
          <FeedbackPopup
            key="feedback"
            onSubmit={handleFeedbackSubmit}
            onClose={handleFeedbackClose}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
