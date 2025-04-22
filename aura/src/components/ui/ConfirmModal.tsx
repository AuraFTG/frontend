interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
}

function ConfirmModal({ isOpen, onClose, onDelete }: ConfirmModalProps) {
  if (!isOpen) return null;

  return (
    <article className="fixed inset-0 bg-black/60 bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
        <div className="flex flex-col justify-between items-center p-4">
          <h2 className="text-xl font-semibold text-gray-800">
            ¿Está seguro que desea eliminar este paciente?
          </h2>

          <footer className="flex justify-end gap-2 [&>button]:cursor-pointer">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
            >
              Cancelar
            </button>
            <button
              type="button"
              onClick={onDelete}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Eliminar
            </button>
          </footer>
        </div>
      </div>
    </article>
  );
}

export default ConfirmModal;
