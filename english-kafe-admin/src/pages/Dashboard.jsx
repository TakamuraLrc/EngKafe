import { BookOpen, FileText, Users, CreditCard, Edit, Trash2, Eye, EyeOff, X } from 'lucide-react'
import { useState } from 'react'
import ConfirmationModal from '../components/ConfirmationModal'

function Dashboard() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Alex James', email: 'alexjames123@gmail.com', dateCreated: '21 Mar 2026', purchasedCourse: 'N/A', isActive: true },
    { id: 2, name: 'Adrian', email: 'adrian884@gmail.com', dateCreated: '21 Mar 2026', purchasedCourse: 'N/A', isActive: true },
    { id: 3, name: 'Sophia', email: 'sophia663@gmail.com', dateCreated: '22 Mar 2026', purchasedCourse: 'N/A', isActive: true },
    { id: 4, name: 'Olivia', email: 'olivia333@gmail.com', dateCreated: '23 Mar 2026', purchasedCourse: 'N/A', isActive: true },
    { id: 5, name: 'Daniel', email: 'daniel89@gmail.com', dateCreated: '28 Mar 2026', purchasedCourse: 'N/A', isActive: true },
  ])

  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [deactivateModalOpen, setDeactivateModalOpen] = useState(false)
  const [selectedUserId, setSelectedUserId] = useState(null)

  const stats = [
    { 
      label: 'Course', 
      value: '12', 
      icon: BookOpen,
      lastUpdated: 'Last created: 20 days ago'
    },
    { 
      label: 'Blog', 
      value: '16', 
      icon: FileText,
      lastUpdated: 'Last created: 2 days ago'
    },
    { 
      label: 'User', 
      value: '74', 
      icon: Users,
      lastUpdated: 'Last joined: 20 days ago'
    },
    { 
      label: 'Payment', 
      value: '33', 
      icon: CreditCard,
      lastUpdated: 'Last Reviewed: 20 days ago'
    },
  ]

  const handleDeleteClick = (userId) => {
    setSelectedUserId(userId)
    setDeleteModalOpen(true)
  }

  const handleConfirmDelete = () => {
    setUsers(users.filter(user => user.id !== selectedUserId))
    setDeleteModalOpen(false)
    setSelectedUserId(null)
  }

  const handleDeactivateClick = (userId) => {
    setSelectedUserId(userId)
    setDeactivateModalOpen(true)
  }

  const handleConfirmDeactivate = () => {
    setUsers(users.map(user =>
      user.id === selectedUserId
        ? { ...user, isActive: !user.isActive }
        : user
    ))
    setDeactivateModalOpen(false)
    setSelectedUserId(null)
  }

  const recentUsers = users

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8">English kafe Administration Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-6 md:mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div key={index} className="bg-pink-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-2 sm:p-3 bg-pink-200 rounded-lg shrink-0">
                  <Icon size={20} className="sm:w-6 sm:h-6 text-gray-700" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{stat.label}</h3>
              </div>
              <p className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">{stat.value}</p>
              <p className="text-xs sm:text-sm text-gray-600">{stat.lastUpdated}</p>
            </div>
          )
        })}
      </div>

      {/* Recent Joined Section */}
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm overflow-hidden">
        <div className="px-4 sm:px-6 py-3 sm:py-4 bg-pink-100 border-b border-pink-200">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900">Recent Joined:</h2>
        </div>

        {/* Table - Responsive */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-pink-50 border-b border-pink-200">
                <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-900">Name</th>
                <th className="hidden sm:table-cell px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-900">Email</th>
                <th className="hidden md:table-cell px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-900">Date created</th>
                <th className="hidden lg:table-cell px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-900">Purchased Course</th>
                <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-900">Action</th>
              </tr>
            </thead>
            <tbody>
              {recentUsers.map((user, index) => (
                <tr key={user.id} className={`border-b border-gray-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-pink-50 transition-colors ${user.isActive ? '' : 'bg-gray-100 opacity-60'}`}>
                  <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-pink-400 to-rose-400 flex items-center justify-center text-white text-xs sm:text-sm font-semibold shrink-0 ${!user.isActive ? 'opacity-50' : ''}`}>
                        {user.name.charAt(0)}
                      </div>
                      <div className="min-w-0">
                        <span className={`text-xs sm:text-sm font-medium truncate block ${user.isActive ? 'text-gray-900' : 'text-gray-500'}`}>{user.name}</span>
                        {!user.isActive && <div className="text-xs text-red-500 font-semibold">Inactive</div>}
                      </div>
                    </div>
                  </td>
                  <td className={`hidden sm:table-cell px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-xs sm:text-sm truncate ${user.isActive ? 'text-gray-600' : 'text-gray-400'}`}>{user.email}</td>
                  <td className={`hidden md:table-cell px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-xs sm:text-sm ${user.isActive ? 'text-gray-600' : 'text-gray-400'}`}>{user.dateCreated}</td>
                  <td className={`hidden lg:table-cell px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-xs sm:text-sm ${user.isActive ? 'text-gray-600' : 'text-gray-400'}`}>{user.purchasedCourse}</td>
                  <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <button
                        onClick={() => handleDeactivateClick(user.id)}
                        className={`p-1.5 sm:p-2 rounded-lg transition-colors shrink-0 ${user.isActive ? 'text-green-600 hover:bg-green-100' : 'text-red-600 hover:bg-red-100'}`}
                        title={user.isActive ? 'Deactivate' : 'Activate'}
                      >
                        {user.isActive ? <Eye size={16} className="sm:w-[18px] sm:h-[18px]" /> : <EyeOff size={16} className="sm:w-[18px] sm:h-[18px]" />}
                      </button>
                      <button
                        onClick={() => handleDeleteClick(user.id)}
                        className="p-1.5 sm:p-2 hover:bg-red-100 rounded-lg transition-colors shrink-0" title="Delete user"
                      >
                        <Trash2 size={16} className="sm:w-[18px] sm:h-[18px] text-red-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      <ConfirmationModal
        isOpen={deleteModalOpen}
        title="Delete User"
        message="Are you sure you want to delete this user? This action cannot be undone."
        onConfirm={handleConfirmDelete}
        onCancel={() => setDeleteModalOpen(false)}
        confirmText="Delete"
        confirmColor="red"
      />

      {/* Deactivate/Activate Confirmation Modal */}
      <ConfirmationModal
        isOpen={deactivateModalOpen}
        title={users.find(u => u.id === selectedUserId)?.isActive ? 'Deactivate User' : 'Activate User'}
        message={users.find(u => u.id === selectedUserId)?.isActive ? 'Are you sure you want to deactivate this user?' : 'Are you sure you want to activate this user?'}
        onConfirm={handleConfirmDeactivate}
        onCancel={() => setDeactivateModalOpen(false)}
        confirmText={users.find(u => u.id === selectedUserId)?.isActive ? 'Deactivate' : 'Activate'}
        confirmColor="blue"
      />
    </div>
  )
}

export default Dashboard
