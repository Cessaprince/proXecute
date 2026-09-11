import React, { useState } from 'react'
import { Pen, X, ImageUp, User, Mail, Lock, Bell, Globe, Sparkles, BellRing } from 'lucide-react'
import profilePic from '../assets/images/default-profile-pic.jpeg'
import iziToast from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'

const Settings = () => {

  // controls whether the avatar shows the pen icon or the upload dropzone
  const [photoEditing, setPhotoEditing] = useState(false)
  const [fileName, setFileName] = useState('')

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name)
    }
  }

  const savePhoto = () => {
    setPhotoEditing(false)
    setFileName('')
  }

  const removePhoto = () => {
    setFileName('')
  }

  // controls the edit profile panel (name, email, password)
  const [editOpen, setEditOpen] = useState(false)

  // edit profile form fields
  const [email, setEmail] = useState('aisharakeem@gmail.com')
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // red error text logic — same pattern as Login.jsx / Register.jsx
  const passwordLengthError = (newPassword.trim().length < 8) && (newPassword !== '')
  const confirmPasswordError = (newPassword !== confirmPassword) && (confirmPassword !== '')

  // button is disabled only when every editable field is empty (name is readOnly, so it's excluded)
  const allFieldsEmpty = !currentPassword && !newPassword && !confirmPassword

  const formSubmit = (e) => {
    e.preventDefault()

    if (currentPassword.trim().length < 8){
      iziToast.warning({
        title: 'Warning',
        message: 'Nothing is filled in current password.',
        position: 'topRight',
        backgroundColor: 'red',
        messageColor: 'white',
        titleColor: 'white',
        timeout: 3000,
        iconColor: 'white'
      })
      return
    }
    if (newPassword && newPassword.trim().length < 8) {
      iziToast.warning({
        title: 'Warning',
        message: 'New password should be 8 characters or more.',
        position: 'topRight',
        backgroundColor: 'red',
        messageColor: 'white',
        titleColor: 'white',
        timeout: 3000,
        iconColor: 'white'
      })
      return
    }

    if (newPassword !== confirmPassword) {
      iziToast.warning({
        title: 'Warning',
        message: 'New password and confirm password do not match.',
        position: 'topRight',
        backgroundColor: 'red',
        messageColor: 'white',
        titleColor: 'white',
        timeout: 3000,
        iconColor: 'white'
      })
      return
    }

    setIsLoading(true)

    // no backend yet, so we simulate a short save delay before confirming
    setTimeout(() => {
      setIsLoading(false)
      setEditOpen(false)
      setCurrentPassword('')
      setNewPassword('')
      setConfirmPassword('')

      iziToast.success({
        title: 'Updated!',
        message: 'Your profile has been updated.',
        position: 'topRight',
      })
    }, 1200)
  }

  // preference toggles — each independent, matching hardcoded/individual state pattern
  const [notifications, setNotifications] = useState(true)
  const [inAppReminders, setInAppReminders] = useState(true)
  const [stacieActive, setStacieActive] = useState(false)

  // language pill selector
  const [language, setLanguage] = useState('us') // 'us' | 'uk'

  const savePreferences = () => {
    iziToast.success({
      title: 'Saved!',
      message: 'Your preferences have been updated.',
      position: 'topRight',
    })
  }

  return (
    <div className='flex flex-col gap-[30px]'>

      {/* the heading */}
      <div className="flex flex-col">
        <h1 className="font-semibold capitalize text-[30px]">settings</h1>
        <p className="text-[15px] max-md:text-[15px] font-light text-gray-500">Manage your profile, preferences, and account details.</p>
      </div>

      <div className="grid grid-cols-1 gap-[20px]">

        {/* profile picture card */}
        <div className="bg-white h-auto w-full shadow-lg rounded-[15px] p-[25px] flex flex-col items-center gap-[15px]">
          <h3 className='text-[16px] font-semibold capitalize text-orange-600 self-start'>profile picture</h3>

          {photoEditing ? (
            <div className="flex flex-col items-center gap-[15px] w-full">

              {!fileName ? (

                <div class="max-w-[200px] w-[60%] mx-auto">
                  <label for="profileImage" class="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 hover:border-orange-500 bg-gray-50 hover:bg-orange-50/50 rounded-[15px] cursor-pointer transition-all duration-200 group">

                    <input
                      type="file"
                      name="profileImage"
                      id="profileImage"
                      class="hidden"
                      onChange={handleFileChange}
                    />

                    <div class="flex flex-col items-center justify-center text-center px-4">
                      <ImageUp className="w-7 h-7 mb-2 text-gray-400 group-hover:text-orange-500 transition-colors" />
                      <p class="text-xs text-gray-700 font-semibold group-hover:text-orange-600 transition-colors">
                        Click to upload new photo
                      </p>
                      <p class="text-[10px] text-gray-500 mt-1">PNG, JPG (Max 5MB)</p>
                    </div>
                  </label>
                </div>
              ) : (
                // once a file is chosen — show the filename + save/remove
                <div className="flex flex-col items-center gap-[10px]">
                  <p className="text-[13px] text-gray-600 font-light underline">{fileName}</p>
                  <div className="flex gap-[20px] items-center">
                    <span onClick={savePhoto} className="text-xs font-semibold text-orange-600 cursor-pointer hover:text-orange-500 transition-all duration-300 ease-in-out">save</span>
                    <span onClick={removePhoto} className="text-xs font-semibold text-gray-500 cursor-pointer hover:text-red-500 transition-all duration-300 ease-in-out">remove</span>
                  </div>
                </div>
              )}

              {/* clicking cancel flips photoEditing back to false — goes back to the normal avatar+pen view */}
              <span onClick={() => { setPhotoEditing(false); setFileName('') }} className="text-[11px] text-gray-400 cursor-pointer hover:text-gray-600">cancel</span>
            </div>
          ) : (
            <div className="relative w-fit">
              <div className="w-[120px] h-[120px] rounded-full overflow-hidden border-[3px] border-orange-100 shadow-sm">
                <img src={profilePic} alt="" className="w-full h-full object-cover" />
              </div>

              {/* pen icon with ping animation — clicking flips photoEditing to true, showing the upload view */}
              <button
                type="button"
                onClick={() => setPhotoEditing(true)}
                className="absolute bottom-[2px] right-[2px] flex items-center justify-center cursor-pointer"
              >
                <span className="absolute inline-flex h-[34px] w-[34px] rounded-full bg-orange-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex items-center justify-center h-[34px] w-[34px] rounded-full bg-orange-600 border-[2px] border-white">
                  <Pen size={14} className='text-white' />
                </span>
              </button>
            </div>
          )}
        </div>

        {/* personal information card */}
        <div className="bg-white h-auto w-full shadow-lg rounded-[15px] p-[25px] flex max-md:flex-col justify-between max-md:gap-[20px] items-center">
          <div className="flex flex-col gap-[7px]">
            <h3 className='text-[16px] font-semibold capitalize text-orange-600'>personal information</h3>
            <p className="text-[14px] font-semibold text-gray-700">Aisha Rakeem</p>
            <p className="text-[13px] font-light text-gray-500 lowercase">aisharakeem@gmail.com</p>
          </div>

          <button
            onClick={() => setEditOpen(true)}
            className="capitalize text-white font-semibold w-fit px-[18px] py-[9px] rounded-[25px] cursor-pointer hover:bg-orange-500 hover:scale-102 transition-all duration-300 ease-in-out text-xs bg-orange-600 shrink-0"
          >
            edit profile
          </button>
        </div>

        {/* preferences card */}
        <div className="bg-white h-auto w-full shadow-lg rounded-[15px] p-[25px] flex flex-col gap-[25px]">
          <h3 className='text-[16px] font-semibold capitalize text-orange-600'>preferences</h3>

          {/* receive notifications */}
          <div className="flex justify-between items-center w-full">
            <div className="flex gap-[12px] items-center">
              <span className="w-[40px] h-[40px] rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                <Bell size={17} className='text-orange-600' />
              </span>
              <div className="flex flex-col">
                <p className="text-[14px] font-semibold capitalize">receive notifications</p>
                <p className="text-[12px] font-light text-gray-500">Get updates about your projects and tasks</p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setNotifications(!notifications)}
              className={`relative inline-flex h-[26px] w-[46px] items-center rounded-full transition-colors duration-300 ease-in-out cursor-pointer shrink-0 ${notifications ? 'bg-orange-600' : 'bg-gray-300'}`}
            >
              <span
                className={`inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-md transition-transform duration-300 ease-in-out ${notifications ? 'translate-x-[23px]' : 'translate-x-[3px]'}`}
              />
            </button>
          </div>

          {/* in-app reminders */}
          <div className="flex justify-between items-center w-full">
            <div className="flex gap-[12px] items-center">
              <span className="w-[40px] h-[40px] rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                <BellRing size={17} className='text-orange-600' />
              </span>
              <div className="flex flex-col">
                <p className="text-[14px] font-semibold capitalize">in-app reminders</p>
                <p className="text-[12px] font-light text-gray-500">Get reminded about upcoming deadlines</p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setInAppReminders(!inAppReminders)}
              className={`relative inline-flex h-[26px] w-[46px] items-center rounded-full transition-colors duration-300 ease-in-out cursor-pointer shrink-0 ${inAppReminders ? 'bg-orange-600' : 'bg-gray-300'}`}
            >
              <span
                className={`inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-md transition-transform duration-300 ease-in-out ${inAppReminders ? 'translate-x-[23px]' : 'translate-x-[3px]'}`}
              />
            </button>
          </div>

          {/* activate stacie ai */}
          <div className="flex justify-between items-center w-full">
            <div className="flex gap-[12px] items-center">
              <span className="w-[40px] h-[40px] rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                <Sparkles size={17} className='text-orange-600' />
              </span>
              <div className="flex flex-col">
                <p className="text-[14px] font-semibold capitalize">activate stacie (ai)</p>
                <p className="text-[12px] font-light text-gray-500">Get recommendations and advice based on your project history</p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setStacieActive(!stacieActive)}
              className={`relative inline-flex h-[26px] w-[46px] items-center rounded-full transition-colors duration-300 ease-in-out cursor-pointer shrink-0 ${stacieActive ? 'bg-orange-600' : 'bg-gray-300'}`}
            >
              <span
                className={`inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-md transition-transform duration-300 ease-in-out ${stacieActive ? 'translate-x-[23px]' : 'translate-x-[3px]'}`}
              />
            </button>
          </div>

          {/* language */}
          <div className="flex max-md:flex-col max-md:items-start max-md:gap-[12px] justify-between items-center w-full">
            <div className="flex gap-[12px] items-center">
              <span className="w-[40px] h-[40px] rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                <Globe size={17} className='text-orange-600' />
              </span>
              <div className="flex flex-col">
                <p className="text-[14px] font-semibold capitalize">language</p>
                <p className="text-[12px] font-light text-gray-500">Choose your preferred language</p>
              </div>
            </div>

            <div className="flex w-fit items-center rounded-[25px] bg-gray-200 h-fit shrink-0">
              <span
                onClick={() => setLanguage('us')}
                className={`font-semibold text-xs cursor-pointer py-[8px] px-[15px] rounded-[25px] transition-all duration-300 ease-in-out ${language === 'us' ? 'bg-orange-600 text-white' : 'text-gray-500'}`}
              >
                English (US)
              </span>
              <span
                onClick={() => setLanguage('uk')}
                className={`font-semibold text-xs cursor-pointer py-[8px] px-[15px] rounded-[25px] transition-all duration-300 ease-in-out ${language === 'uk' ? 'bg-orange-600 text-white' : 'text-gray-500'}`}
              >
                English (UK)
              </span>
            </div>
          </div>

          {/* save all preference toggles together */}
          <button
            type="button"
            onClick={savePreferences}
            className='self-end capitalize text-white font-semibold w-fit px-[18px] py-[9px] rounded-[25px] cursor-pointer hover:bg-orange-500 hover:scale-102 transition-all duration-300 ease-in-out text-xs bg-orange-600'
          >
            save preferences
          </button>

        </div>
      </div>

      {/* edit profile panel*/}
      {editOpen && (
        <div className="fixed inset-0 bg-black/30 z-20 flex items-center justify-center p-[20px]">
          <div className="w-[50%] max-lg:w-[80%] max-md:w-[92%] max-h-[85vh] overflow-y-auto no-scrollbar bg-white rounded-[20px] shadow-lg flex flex-col gap-[20px] py-[20px]">

            <div className="flex justify-between items-center w-full px-[25px] border-b-[0.1px] border-gray-300 pb-[15px]">
              <h3 className="font-semibold capitalize">edit profile</h3>
              <X
                onClick={() => setEditOpen(false)}
                className='cursor-pointer'
                color="grey"
                size={18}
              />
            </div>

            <form onSubmit={formSubmit} className="flex flex-col gap-[15px] px-[25px]">

              {/* name — readOnly, will be set during registration going forward */}
              <div className="flex flex-col gap-[5px]">
                <label htmlFor="fullName" className='font-semibold capitalize text-[14px] flex items-center gap-[6px]'>
                  <User size={14} className='text-gray-500' /> full name
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  className='py-[8px] px-[15px] text-[13px] text-gray-500 bg-gray-50 border-gray-300 border-[0.1px] rounded-[8px] outline-none cursor-not-allowed'
                  value='Aisha Rakeem'
                  readOnly
                />
              </div>

              {/* email */}
              <div className="flex flex-col gap-[5px]">
                <label htmlFor="emailAddress" className='font-semibold capitalize text-[14px] flex items-center gap-[6px]'>
                  <Mail size={14} className='text-gray-500' /> email address
                </label>
                <input
                  type="email"
                  name="emailAddress"
                  id="emailAddress"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className='py-[8px] px-[15px] text-[13px] text-gray-600 border-gray-400 border-[0.1px] rounded-[8px] outline-none hover:border-black transition-all duration-500 ease-in-out'
                />
              </div>

              {/* current password */}
              <div className="flex flex-col gap-[5px] mt-[10px]">
                <label htmlFor="currentPassword" className='font-semibold capitalize text-[14px] flex items-center gap-[6px]'>
                  <Lock size={14} className='text-gray-500' /> current password
                </label>
                <input
                  type="password"
                  name="currentPassword"
                  id="currentPassword"
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  value={currentPassword}
                  className='py-[8px] px-[15px] text-[13px] text-gray-600 border-gray-400 border-[0.1px] rounded-[8px] outline-none hover:border-black transition-all duration-500 ease-in-out'
                  placeholder='••••••••'
                />
              </div>

              {/* new password */}
              <div className="flex flex-col gap-[5px]">
                <label htmlFor="newPassword" className='font-semibold capitalize text-[14px] flex items-center gap-[6px]'>
                  <Lock size={14} className='text-gray-500' /> new password
                </label>
                <input
                  type="password"
                  name="newPassword"
                  id="newPassword"
                  onChange={(e) => setNewPassword(e.target.value)}
                  value={newPassword}
                  className='py-[8px] px-[15px] text-[13px] text-gray-600 border-gray-400 border-[0.1px] rounded-[8px] outline-none hover:border-black transition-all duration-500 ease-in-out'
                  placeholder='••••••••'
                />
                {passwordLengthError &&
                  <span className="text-red-500 text-xs font-light">Password should be 8 characters or more.</span>
                }
              </div>

              {/* confirm new password */}
              <div className="flex flex-col gap-[5px]">
                <label htmlFor="confirmPassword" className='font-semibold capitalize text-[14px] flex items-center gap-[6px]'>
                  <Lock size={14} className='text-gray-500' /> confirm new password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={confirmPassword}
                  className='py-[8px] px-[15px] text-[13px] text-gray-600 border-gray-400 border-[0.1px] rounded-[8px] outline-none hover:border-black transition-all duration-500 ease-in-out'
                  placeholder='••••••••'
                />
                {confirmPasswordError &&
                  <span className="text-red-500 text-xs font-light">Passwords do not match.</span>
                }
              </div>

              {/* the button */}
              <button
                type="submit"
                disabled={isLoading || allFieldsEmpty}
                className='w-full mt-[15px] border-[0.1px] border-gray-300 py-[10px] text-sm capitalize text-white bg-orange-600 font-semibold rounded-[15px] cursor-pointer hover:bg-orange-500 hover:scale-98 transition-all ease duration-500 flex items-center justify-center gap-[8px] disabled:opacity-60 disabled:cursor-not-allowed'
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                    </svg>
                    updating...
                  </>
                ) : (
                  'save changes'
                )}
              </button>

            </form>

          </div>
        </div>
      )}

    </div>
  )
}

export default Settings