# Architecture in Web Dev - Monolithic vs Microservices
## Monolithic
![image](https://github.com/user-attachments/assets/823c55da-834b-4552-bd20-73f7d9f6ee48)
- In the past, we used to build large projects where everything was bundled together.
- Imaging building an entire application where all the code-APIs, user interface, database connections, authentication, even notification services-resides in one massive project, with single code base.
- **Size and complexity limitation**: Monolithic applications become too large and complex to understand.
- **Slow startup**: The application's size can slow down startup time.
- **Full deployment required**: It's hard to grasp the full impact of changes leading to extensive manual testing.
- **Limited change understanding**: It's hard to grasp the full impact of changes, leading to extensive manual testing.
- **Difficult continuous deployment**: Implementing continuous deployment is challenging.
- **Scaling Challenges**: Different modules may have conflicting resource needs, making scaling difficulty.
- **Reliability Concerns**: Bugs in any module can crash the whole application, affecting availability.
- **Adoption of new technologies**: Making changes in frameworks or languages is expensive and time consuming since it affects the entire application.

## Microservices
![image](https://github.com/user-attachments/assets/bd2e8b2f-52db-4ad8-bb74-b5e34800d90a)
- The idea is to split your application into a set of smaller, interconnected services instead of building a single monolithic application.
- Each services handles a specific job, like handling user accounts or managing payments.
- Inside each service, there's a mini-world of its own, with its own set of rules (business logic) and tools (adapters).
- Some services talk to each other in different ways, like using REST or messaging. Others might even have their own website.
- **Simpler Development**: Microservices break down complex applications into smaller, easier to handle services. This makes development faster and maintenance easier.
- **Independent Teams**: Each service can be developed independently by a team focused on that specific task.
- **Flexibility in technology**: Developers have freedome to choose the best technologies for each service, without being tied to choices made at the project's start.
- **Continous Deployment**: Microservices allow for independent deployment, enabling continous deployment for complex applications.
- **Scalability**: Each service can be scaled independently, ensuring efficient resource usage.
- **Separation of Concerns**: With each task having its own project, the architecture stays organized and manageable.
- **Single Responsibility**: Every service has its own job, following the principle of single responsibility. This ensures focused and efficient development.
