namespace BootcampThanos.DataAccess.Contracts
{
    public interface IUnitOfWork
    {
        void Commit();
    }
}
