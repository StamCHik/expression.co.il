using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Expression.Startup))]
namespace Expression
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            
        }
    }
}
